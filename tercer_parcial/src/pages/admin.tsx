import AdminComponent from "@/components/AdminComponent";
import { Metadata } from "next";
import "./../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Admin() {
    return (
        <div className="admin-section">
            <Header />
            <AdminComponent />
            <Footer />
        </div>
    )
}