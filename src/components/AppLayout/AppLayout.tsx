import AppSubNav from "@/components/AppLayout/AppSubNav/AppSubNav";
import AppTitleBar from "@/components/AppLayout/AppTitleBar/AppTitleBar";
import AppNav from "@/components/AppLayout/AppNav/AppNav";
import AppUnified from "@/components/AppLayout/AppUnified/AppUnified";
import {ReactNode} from "react";

export default function AppLayout() {
    return (
        <div className='app-layout flex'>
            <AppNav></AppNav>
            <div className='flex-1'>
                <AppTitleBar></AppTitleBar>
                <div className='flex h-full max-h-[calc(100vh-3rem)] overflow-auto'>
                    <AppSubNav></AppSubNav>
                    <AppUnified></AppUnified>
                </div>
            </div>
        </div>
    )
}
