import React from "react";
import { Dashboard } from "../screens/dashbord";
import { EventSetting } from "../screens/eventSetting";
import { MusicDelivary } from "../screens/musicDelivary";


export const menuItems = [
  {
    label: 'ダッシュボード',
    key: '1',
    path: "/dashboard",
  },
  {
    label: 'ミュージック',
    key: '2',
    path: "/delivery-music",
  },
  {
    label: 'イベント',
    key: '3',
    path: "/event-setting",
  },
];
