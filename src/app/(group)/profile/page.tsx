"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../layout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tabs, Text, Box, Badge, Flex } from "@radix-ui/themes";
import type { review } from "../../../../generated/prisma";
import toast from "react-hot-toast";

// ----------------- Types -----------------

type Application = {
  job_id: string;
};

type User = {
  id: string;
  email: string;
  role: string;
  company_id?: string | null;
};

type ReviewWithCompany = review & {
  company?: {
    id: string;
    name: string;
  } | null;
};

// ----------------- Component -----------------

export default function Page() {
  const userCtx = useContext(UserContext);
  const user = userCtx?.user as User | null;

  const [applications, setApplications] = useState<Application[]>([]);
  const [reviews, setReviews] = useState<ReviewWithCompany[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const [profileRes, reviewRes] = await Promise.all([
          fetch("/api/profile"),
          fetch("/api/profile/review"),
        ]);

        const profileData = await profileRes.json();
        const reviewData = await reviewRes.json();

        if (profileData.success) {
          setApplications(profileData.data?.application || []);
          toast.success(profileData?.message || "Operation Successful");
        }
        if (reviewData.success) {
          setReviews(reviewData.data || []);
          toast.success(reviewData?.message || "Operation Successful");
        }
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  // ✅ Show full-screen loader until user + data is ready
  if (loading || !user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-blue-600"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-7 justify-center items-center m-5 overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row rounded-bl-2xl bg-blue-500 w-full pt-3 sm:pb-5">
        <div className="object-left object-cover flex justify-center items-center w-[40vh] h-[40vh] sm:w-[60vh] sm:pl-20 sm:h-[50vh] overflow-hidden">
          <img src="/job7.png" alt="job" />
        </div>

        <div className="w-[55vh] flex flex-col bg-white sm:w-[50%] mx-auto mt-10 p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">User Profile</h1>

          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">User ID:</span>
              <p className="text-gray-800">{user.id}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Email:</span>
              <p className="text-gray-800">{user.email}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-700">Role:</span>
              <p className="text-gray-800 capitalize">{user.role}</p>
            </div>

            {user.company_id && (
              <div>
                <span className="font-semibold text-gray-700">Company ID:</span>
                <p className="text-gray-800">{user.company_id}</p>
                <Link
                  href={`/company/${user.company_id}`}
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-[33vh] sm:w-[45vh] justify-between"
                >
                  View Company Profile
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center gap-7 text-lg pb-10">
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="settings">Introduction</Tabs.Trigger>
            <Tabs.Trigger value="account">My Applications</Tabs.Trigger>
            <Tabs.Trigger value="documents">My Reviews</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            {/* Intro Tab */}
            <Tabs.Content value="settings">
              <Text size="2" className="p-3">
                Welcome to your profile! Since you’re new, you may not have
                applied to any jobs or written any reviews yet. Start exploring
                opportunities and share your experiences once you engage with
                companies.
              </Text>
            </Tabs.Content>

            {/* Applications Tab */}
            <Tabs.Content value="account">
              <Flex gap="2" direction="column">
                {applications.length > 0 ? (
                  applications.map((item, index) => (
                    <Link key={index} href={`/jobs/${item.job_id}`}>
                      <Badge color="blue" className="pl-5">
                        {item.job_id}
                      </Badge>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 italic p-3">
                    You haven’t applied to any jobs yet.{" "}
                    <Link
                      href="/jobs?search=engineer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Browse jobs now →
                    </Link>
                  </p>
                )}
              </Flex>
            </Tabs.Content>

            {/* Reviews Tab */}
            <Tabs.Content value="documents">
              <Flex gap="4" direction="column">
                {reviews.length > 0 ? (
                  reviews.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 bg-white shadow rounded-lg border border-gray-200 text-sm"
                    >
                      {/* Review Content */}
                      <div className="flex-1">
                        <span className="font-semibold text-gray-700">
                          Review:
                        </span>
                        <p className="text-gray-800">{item.content}</p>
                      </div>

                      {/* Company Info */}
                      {item.company && (
                        <div className="mt-2 sm:mt-0 flex items-center gap-2">
                          <span className="font-semibold text-gray-700">
                            Company:
                          </span>
                          <Link href={`/company/${item.company.id}`}>
                            <Badge color="blue">{item.company.name}</Badge>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic p-3">
                    You haven’t written any company reviews yet.{" "}
                    <span className="text-blue-600 font-medium">
                      Find a company and review it
                    </span>
                  </p>
                )}
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}
