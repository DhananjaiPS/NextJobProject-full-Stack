import { Callout, Dialog, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoWarningOutline } from "react-icons/io5";

export default function DeleteJobDialog({
    jobId,
    onDelete,
    isPending,
}: {
    jobId: string;
    onDelete: (id: string) => void;
    isPending: boolean;
}) {
    const [open, setOpen] = useState(false);
    const [confirmText, setConfirmText] = useState("");

    const handleDelete = () => {
        if (confirmText === "delete") {
            onDelete(jobId);
            setConfirmText("");
            setOpen(false);
        } else {
            toast.error("Please type 'delete' to confirm.");
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <button
                    className="px-3 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition disabled:opacity-50"
                >
                    Delete
                </button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title className="text-lg font-bold text-red-600">
                    Confirm Delete
                </Dialog.Title>
                <Dialog.Description className="text-gray-600 mt-2">
                    <Flex direction="column" gap="3">
                        <Callout.Root color="red">
                            <Callout.Icon>
                                <IoWarningOutline />
                            </Callout.Icon>
                            <Callout.Text>
                                This action cannot be undone. Please type<Link href="#"> delete</Link> below to confirm.
                            </Callout.Text>
                        </Callout.Root>
                    </Flex>

                </Dialog.Description>

                <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Type 'delete' here"
                    className="w-full mt-4 p-2 border rounded-md"
                />
                <div className="flex justify-end gap-3 mt-4">
                    <Dialog.Close>
                        <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                    </Dialog.Close>
                    <button 
                        onClick={handleDelete}
                        disabled={confirmText !== "delete" || isPending}
                        className={`px-4 py-2 rounded-md text-white ${confirmText === "delete"
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-red-300 cursor-not-allowed"
                            }`}
                    >
                        Delete
                    </button>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    );
}
