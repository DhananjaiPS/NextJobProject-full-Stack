//@ts-nocheck

import React, { useTransition } from 'react'
import toast, { Toaster } from "react-hot-toast";

export default function DeleteJobBtn({id}){
  const [isPending,startTransition  ]=useTransition()

    async function handelDeleteJob(id: string) {
    const obj = {
      id
    }
    const url = `/api/company/latestJob`
    startTransition(async () => {
      try {

        const res = await fetch(url, {
          method: "DELETE",
          body: JSON.stringify(obj)
        })
        const data = await res.json();
        if (data.success) {
          toast.success(data.message);
          console.log(data.data)
          setCompanyJobs(prev => prev.filter(j => j.id !== data.data.id));

        }
        else {
          toast(data.message)
        }
      }
      catch (err : any) {
        toast.error(err);
      }
    })}
    return (
        <div>
            <button
                onClick={() => handelDeleteJob(job.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
                disabled={isPending}
            >
                {isPending ? "Deleting..." : "Delete"}
            </button>
        </div>
    )
}
