import React from "react";

import { AppContext } from "../provider/AppProvider";

export default function useAppHook() {
    return React.useContext(AppContext);
}