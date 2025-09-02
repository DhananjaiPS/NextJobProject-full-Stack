"use client";
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useContext, useState, useEffect, useTransition } from "react";
import { UserContext } from "../../(group)/layout";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AddCompany() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // 🚨 If user has company already, redirect home
  useEffect(() => {
    if (user?.company_id) {
      window.location.href = "/"; // hard reload
    }
  }, [user, router]);

  async function handleSubmit() {
    if (!user) return; // make sure user exists

    const obj = { name, description };

    try {
      const res = await fetch("/api/company/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      const data = await res.json();
      if (data.success) {
        setUser({
          ...user,
          company_id: data?.data?.id,
        });

        toast.success(data.message || "Company created successfully!");
        setTimeout(() => {
          window.location.href = "/"; // 🔄 hard reload after company creation
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Failed to submit company:", err);
      toast.error("Failed to submit company. Try again later.");
    }
  }

  return (
    <div>
      
      <Toaster position="top-right" reverseOrder={false} />

      <Dialog.Root open={!user?.company_id}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Please enter the company details :</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            You must create your company before continuing.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Root
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder="Enter company's full name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Description
              </Text>
              <TextField.Root
                value={description}
                onChange={(e) => setDescription(e?.target?.value)}
                placeholder="Enter company description"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Button onClick={handleSubmit} disabled={isPending}>
              {isPending ? "Creating..." : "Create My Company"}
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
