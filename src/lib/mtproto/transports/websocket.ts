/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import { logger, LogTypes } from '../../logger';
import Modes from '../../../config/modes';
import EventListenerBase from '../../../helpers/eventListenerBase';
import { MTConnection } from './transport';

export default class Socket extends EventListenerBase<{
  open: () => void,
  message: (buffer: ArrayBuffer) => any,
  close: () => void,
}> implements MTConnection {
  private ws: WebSocket;
  private log: ReturnType<typeof logger>;
  private debug = Modes.debug && false;

  constructor(protected dcId: number, protected url: string, logSuffix: string) {
    super();

    let logTypes = LogTypes.Error | LogTypes.Log;
    if(this.debug) logTypes |= LogTypes.Debug;
    this.log = logger(`WS-${dcId}` + logSuffix, logTypes);
    this.log('Socket->constructor');
    this.connect();

    return this;
  }

  private removeListeners() {
    if(!this.ws) {
      return;
    }

    this.ws.removeEventListener('open', this.handleOpen);
    this.ws.removeEventListener('close', this.handleClose);
    this.ws.removeEventListener('error', this.handleError);
    this.ws.removeEventListener('message', this.handleMessage);
    this.ws = undefined;
  }
  
  private connect() {
    this.ws = new WebSocket(this.url, 'binary');
    this.ws.binaryType = 'arraybuffer';
    this.ws.addEventListener('open', this.handleOpen);
    this.ws.addEventListener('close', this.handleClose);
    this.ws.addEventListener('error', this.handleError);
    this.ws.addEventListener('message', this.handleMessage);
  }

  public close() {
    if(!this.ws) {
      return;
    }

    this.log('socket->关闭');

    try {
      this.ws.close();
    } catch(err) {

    }
    this.handleClose();
  }
  
  private handleOpen = () => {
    this.log('socket->opened');

    this.debug && this.log.debug('sending init packet');
    this.dispatchEvent('open');
  };

  private handleError = (e: Event) => {
    this.log.error('socket->handleError', e);
    this.close();
  };

  private handleClose = () => {
    this.log('closed'/* , event, this.pending, this.ws.bufferedAmount */);

    this.removeListeners();
    this.dispatchEvent('close');
  };

  private handleMessage = (event: MessageEvent) => {
    this.debug && this.log.debug('<-', 'handleMessage', /* event,  */event.data.byteLength);

    this.dispatchEvent('message', event.data as ArrayBuffer);
  };

  public send = (body: Uint8Array) => {
    this.debug && this.log.debug('socket->send  body length to send:', body.length);
    this.ws.send(body);
  };
}
