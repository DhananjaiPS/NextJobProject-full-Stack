//@ts-nocheck

"use client"
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EditCompanyButton({ company }) {
    const [name, setName] = useState(company.name);
    const [des, setDes] = useState(company.description);
    const [isPending, startTransition] = useTransition();
    const params = useParams()?.id;

    async function handleSubmit() {
        const obj = { name, description:des };
        startTransition(async () => {
            try {
                const res = await fetch(`/api/company/${params}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(obj)
                });
                const data = await res.json();
                toast(data.message);
                if (data.success) {
                    toast.success("Company Edited Successfully ")
                    window.location.reload(); // Optionally refresh data
                }
            } catch (error) {
                toast.error("An error occurred while updating.");
                console.error("Error:", error);
            }
        });
    }

    return (
        <div className="w-[30vh]">
            <Dialog.Root>
                <Dialog.Trigger>
                    <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
                        {isPending ? "Updating..." : "Edit Company Details"}
                    </button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Edit Company</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Make changes to your company details.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Company Name
                            </Text>
                            <TextField.Root
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter company name"
                            />
                        </label>

                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Company Description
                            </Text>
                            <TextField.Root
                                value={des}
                                onChange={(e) => setDes(e.target.value)}
                                placeholder="Enter company description"
                            />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                        <Button onClick={handleSubmit}>
                            {isPending ? "Saving..." : "Save"}
                        </Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
}
