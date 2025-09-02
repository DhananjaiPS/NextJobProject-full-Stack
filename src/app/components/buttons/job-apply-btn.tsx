"use client";

import { useState, useTransition } from "react";
import { opening } from "../../../../generated/prisma"; // your Prisma type
import toast, { Toaster } from "react-hot-toast";

type JobApplyBtnProps = {
  job: opening; // Prisma opening type
  UserHasApplied: boolean;
};

export default function JobApplyBtn({ job, UserHasApplied }: JobApplyBtnProps) {
  const [hasApplied, setHasApplied] = useState<boolean>(UserHasApplied);
  const [isPending, startTransition] = useTransition();

  async function handleApply() {
    startTransition(() => {
      // wrap in async IIFE for useTransition
      (async () => {
        try {
          const res = await fetch(`/api/job/apply/${job.id}`, { method: "POST" });
          const data = await res.json();

          if (data?.success) {
            toast.success(data.message);
            setHasApplied(true);
          } else {
            toast.error(data?.message || "Apply failed");
          }
        } catch (err:any) {
          toast.error(err);
        }
      })();
    });
  }

  async function handleDelete() {
    startTransition(() => {
      (async () => {
        try {
          const res = await fetch(`/api/job/apply/${job.id}`, { method: "DELETE" });
          const data = await res.json();

          if (data?.message) {
            toast.success(data.message);
          } else {
            toast.error("Something went wrong while deleting");
          }
          setHasApplied(false);
        } catch (err: any) {
          toast.error(err?.message || err);
        }
      })();
    });
  }

  return (
    <div>
      {!hasApplied && (
        <button
          onClick={handleApply}
          className="bg-orange-500 px-5 py-2 w-full sm:w-[30vh] mb-4 rounded justify-center hover:bg-gray-800 transition text-white text-sm items-center flex"
          disabled={isPending}
        >
          {isPending ? "Applying..." : "Apply Now"}
        </button>
      )}
      {hasApplied && (
        <button
          className="bg-red-500 px-5 py-2 w-[20vh] mb-4 rounded hover:bg-gray-800 transition text-white text-sm"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Withdraw"}
        </button>
      )}
    </div>
  );
}
