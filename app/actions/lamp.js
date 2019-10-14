//export const SWITCH = 'SWITCH';
//在redux中有几个地方可以打印state看看，但是这个文件中
//绝对不能打印state
import React, { Component } from 'react';
import {SWITCH} from '../constants/ActionTypes';
export function switchLamp() {
  return {
    type: SWITCH,
  };
};
