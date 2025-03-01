"use client";
import { useAppSelector } from "@/lib/hooks/StoreHook";
import Gallery from "../../components/model/Gallery";
import AddForm from "./AddForm";
import SuccessToast from "../../components/alert/Toast/SuccessToast";
import DataTable from "./DataTable";

const TableContainer = ({lang})=> {


    const isGalleryOpen = useAppSelector(state => state.showModel.open);
    const isAddOpen = useAppSelector(state => state.seoForm.open);
    const isToastOpen = useAppSelector(state => state.showToast.open);

    return (
        <>
        <DataTable lang={lang} />
        {
            isGalleryOpen && <Gallery />
        }
        {
            isAddOpen && <AddForm lang={lang} />
        }
        {
            isToastOpen && <SuccessToast />
        }
        </>
    )

}

export default TableContainer;