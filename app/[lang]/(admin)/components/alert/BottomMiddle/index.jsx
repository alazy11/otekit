"use client";
import { useAppSelector } from "@/lib/hooks/StoreHook";
import { useAppDispatch } from "@/lib/hooks/StoreHook";
import { useEffect, useRef } from "react";
import { show } from "@/state-management/slices/events/notification-slice";

// const notifications = $.querySelector(".notifications");
// buttons = $.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icon: `
        <span>
            <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.3 7.61-4.57 6a1 1 0 0 1-1.58.01l-2.44-3.11a1.001 1.001 0 1 1 1.58-1.23l1.63 2.08 3.78-5a1.006 1.006 0 1 1 1.6 1.22v.03Z" />
            </svg>
        </span>
        `,
        text: "Success: This is a success toast."
    },
    error: {
        icon: `
        <span>
        <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L13.06 12l2.47 2.47Z" />
</svg>
        </span>
        `,
        text: "Error: This is an error toast."
    },
    warning: {
        icon: `
        <span>
        <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m22.56 16.303-7.67-12.72a3.43 3.43 0 0 0-5.78 0l-7.67 12.72a3 3 0 0 0-.05 3 3.37 3.37 0 0 0 2.94 1.7h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04Zm-10.56.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0v4Z" />
</svg>
        </span>
        
        `,
        text: "Warning: This is a warning toast."
    },
    info: {
        icon: `
        <span>
        <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm0 14.996a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.018-9.43-.269 5.72a.75.75 0 0 1-1.5 0L10.98 7.82v-.003a1.02 1.02 0 1 1 2.036 0h.002Z" />
</svg>
        
        </span>
        
        `,
        text: "Info: This is an information toast."
    }
}



const BottomMiddle = () => {
    const create = useAppSelector(state => state.showNotification.open);
    const type = useAppSelector(state => state.showNotification.type);
    const message = useAppSelector(state => state.showNotification.message);
    const dispatch = useAppDispatch();
    const notRef = useRef();



    const removeToast = (toast) => {
        toast.classList.add("hide")
        if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
        setTimeout(() => toast.remove(), 500) // Removing the toast after 500ms
    }
    
    const createToast = (id, notifications,message) => {
        // Getting the icon and text for the toast based on the id passed
        const { icon, text } = toastDetails[id];
        const toast = document.createElement("li"); // Creating a new 'li' element for the toast
        toast.className = `toast ${id}` // Setting the classes for the toast
        // Setting the inner HTML for the toast
        toast.innerHTML = `
        <div class="column">
                                                    ${icon}
                                                    <span>${message}</span>
                                            </div>
                                            <button  onclick="removeToast(this.parentElement)" >
                                            <svg width='100%' height='100%' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z" />
    </svg>
                                            </button>
                                            `;
    
        notifications.appendChild(toast); // Append the toast to the notification ul
        // Setting a timeout to remove the toast after the specified duration
        toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
    }


    useEffect(() => {
        if (create) {
            createToast(type, notRef.current,message)
        }

        return () => {
            dispatch(show(false))
        }

    }, [create])

    return (
        <ul ref={notRef} className="notifications z-[60000]">

        </ul>
    );
}

export default BottomMiddle;