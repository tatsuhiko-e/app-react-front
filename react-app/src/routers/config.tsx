import React, { ReactNode } from "react";

import { RouterProps } from "react-router-dom";

import { MusicDelivary } from "../screens/musicDelivary";
import { EventSetting } from "../screens/eventSetting";
import { Dashboard } from "../screens/dashbord";


export const pageRoutes = [
  {
    children: <Dashboard />,
    path: "/dashboard",
    
  },
  {
    children: <MusicDelivary />,
    path: "/music-delivary",

  },
  {
    children: <EventSetting />,
    path: "/event-setting",
  }
]