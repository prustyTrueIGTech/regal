'use client';

import { commonContext } from "../../../store/index";
import { useContext } from "react";

export const useCommonContext = () => useContext(commonContext);
