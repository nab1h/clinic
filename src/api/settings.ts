import axios from "axios";
import type { Clinic, ClinicSettings } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getSettings = async (clinicSlug: string): Promise<ClinicSettings> => {
    const url = `${urlApi}/api/${clinicSlug}/settings`;
    console.log("Fetching settings from:", url);
    const res = await axios.get<ClinicSettings>(url);
    console.log("Settings response:", res.data);
    return res.data;
}

export const getClinicData = async (clinicSlug: string): Promise<Clinic | null> => {
    try {
        const url = `${urlApi}/api/${clinicSlug}`;
        console.log("Fetching clinic data from:", url);
        const res = await axios.get<Clinic>(url);
        console.log("Clinic data response:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching clinic data:", error);
        return null;
    }
}
