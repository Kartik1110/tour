"use client"

import { createClient } from "@/utils/supabase/client";

export default function Navbar() {
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();

        window.location.href = "/login";
    };

    return (
        <div className="navbar bg-base-100 px-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                </div>
                <a className="text-xl">Tour</a>
            </div>

            <div className="navbar-end">
                <button className="btn btn-error" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}