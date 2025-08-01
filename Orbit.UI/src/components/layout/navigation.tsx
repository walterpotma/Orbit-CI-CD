"use client"
import { LayoutDashboard } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useRouter, usePathname } from "next/navigation";

export default function Nav () {
    const router = useRouter();
    const pathUrl = usePathname();

    return (
        <nav className="w-74 pt-5 h-full bg-[var(--dark)]">
            <button onClick={() => router.push('/')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-grid-1x2-fill mr-2 text-lg"></i>
                Dashboard
            </button>
            <button onClick={() => router.push('/repository')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/repository' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-box-seam-fill mr-2 text-lg"></i>
                Repositórios
            </button>
            <button onClick={() => router.push('/pipeline')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/pipeline' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-layer-forward mr-2 text-lg"></i> 
                Pipelines
            </button>
            <button onClick={() => router.push('/jobs')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/deploy' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-rocket-takeoff-fill mr-2 text-lg"></i> 
                Deploys
            </button>
            <button onClick={() => router.push('/analytics')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/analytics' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-clipboard-data-fill mr-2 text-lg"></i> 
                Análises
            </button>
            <button onClick={() => router.push('/settings')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/settings' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-gear-fill mr-2 text-lg"></i> 
                Configurações
            </button>
            <button onClick={() => router.push('/support')} className={`w-full py-4 px-10 flex justify-start items-center cursor-pointer hover:bg-slate-800 hover:text-blue-500 hover:border-l-2 border-blue-500 ${pathUrl === '/support' ? 'bg-slate-800 text-blue-500 border-l-2' : 'text-slate-400'}`}>
                <i className="bi bi-life-preserver mr-2 text-lg"></i> 
                Suporte
            </button>
        </nav>
    );
}