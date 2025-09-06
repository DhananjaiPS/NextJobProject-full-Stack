"use client";
import EditCompanyButton from "@/app/components/buttons/EditCompanyButton";
import { Tabs, Box, Dialog } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState, useTransition } from "react";
import { UserContext } from "../../layout";
import EditJobForm from "@/app/components/buttons/EditJobform";
import Link from "next/link";
import toast from "react-hot-toast";
import { GrMapLocation } from "react-icons/gr";
import { TfiBriefcase } from "react-icons/tfi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import DeleteJobDialog from "@/app/components/buttons/DeleteJobDialog";
interface Job {
  id: string;
  title: string;
  description: string;
  job_type: string;
  employment_type: string;
  location: string;
  salary: number;
}

interface User {
  email: string;
  id: string;
  role: string;
  company_id?: string;
  company?: { id: string };
}

interface Review {
  content: string;
  user: { email: string };
}

interface Company {
  id: string;
  name: string;
  description: string;
  jobs: Job[];
  review: Review[];
}

export default function CompanyWithOwnerPage() {
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { user } = useContext(UserContext) as { user: User };
  const params = useParams();
  const id = params.id as string;
  const [isPending, startTransition] = useTransition();

  const [company, setCompany] = useState<Company | null>(null);
  const [owner, setOwner] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [companyJobs, setCompanyJobs] = useState<Job[]>([]);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(companyJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = companyJobs.slice(startIndex, startIndex + jobsPerPage);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await fetch(`/api/company/${id}`);
        const data = await res.json();

        if (data.success) {
          const { company, owner } = data.data;
          setCompany(company);
          setCompanyJobs(company?.jobs ?? []);
          setOwner(owner);
          toast.success(data?.message || "Company Details Loaded Successfully");
        } else {
          toast.error(data?.message || "Failed to fetch company");
        }
      } catch (error: any) {
        toast.error("Error fetching company: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center gap-7">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            Loading company details...
      </div>
    );
  }

  if (!company || !owner) {
    return <div>Company or owner not found</div>;
  }

  async function handelReview() {
    const object = {
      company_id: id,
      content: reviewText,
      user_id: user?.id,
    };

    try {
      const res = await fetch(`/api/company/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      const data = await res.json();
      if (data?.success) {
        toast.success(data?.message);
        setOpen(false);
        setReviewText("");
        setCompany((prev) =>
          prev
            ? {
              ...prev,
              review: [
                ...prev.review,
                {
                  content: reviewText,
                  user: { email: data?.user?.email ?? "Anonymous" },
                },
              ],
            }
            : null
        );
      } else {
        toast.error(data.message || "Failed to add review");
      }
    } catch (err: any) {
      toast.error("Error: " + err.message);
    }
  }

  async function handelDeleteJob(jobId: string) {
    startTransition(async () => {
      try {
        const res = await fetch(`/api/company/latestJob`, {
          method: "DELETE",
          body: JSON.stringify({ id: jobId }),
        });
        const data = await res.json();
        if (data?.success) {
          toast.success(data.message);
          setCompanyJobs((prev) => prev.filter((j) => j?.id !== jobId));
        } else {
          toast.error(data.message);
        }
      } catch (err: any) {
        toast.error("Error: " + err.message);
      }
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Company Info */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="flex gap-7">
              <div className="bg-blue-600 w-17 sm:w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                {company.name[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
                <p className="text-sm text-gray-500">Company Profile</p>
              </div>
            </div>

            {id === user?.company?.id && (
              <div className="flex justify-center">
                <EditCompanyButton company={company} />
              </div>
            )}
          </div>

          {/* Company Image */}
          <div className="w-full lg:w-1/2 flex justify-center p-4">
            <video
              src="/pro3.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-52 sm:h-60 lg:h-72 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white mt-6 p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="font-semibold text-lg mb-2">About Company</h2>
            <p>{company.description || "No description provided."}</p>
          </div>

          <div className="bg-white mt-6 p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h2 className="font-semibold text-lg mb-4">Company Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Company Name</p>
                <p className="text-gray-900">{company.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Tabs */}
        <div>
          <Tabs.Root defaultValue="jobs">
            <Tabs.List>
              <Tabs.Trigger value="jobs">Latest Jobs</Tabs.Trigger>
              <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              {/* Jobs Tab */}
              <Tabs.Content value="jobs">
                {currentJobs.length === 0 && <div>No jobs available.</div>}
                {currentJobs.map((job) => (
                  <div
                    key={job.id}
                    className="group relative border border-gray-200 bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/jobs/${job.id}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 capitalize group-hover:text-blue-600 transition line-clamp-1 ">
                          {job.title.slice(0, 20)}{job.title.length > 25 && "..."}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 line-clamp-1 sm:line-clamp-2  w-[10vh] sm:w-[90%] ">
                            {job.description}
                          </p>
                        </div>
                        <span className="ml-3 text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded-full ">
                          {job.job_type || "On-site"}
                        </span>
                      </div>
                    </Link>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-col text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <GrMapLocation /> {job.location || "Remote"}
                        </span>
                        <span className="flex items-center gap-1">
                          <TfiBriefcase /> {job.employment_type || "Full-time"}
                        </span>
                        <span className="flex items-center gap-1">
                          <MdOutlineCurrencyRupee /> {job.salary?.toLocaleString() || "Not disclosed"}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingJob(job)}
                          className="px-3 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                        >
                          Edit
                        </button>
                        <DeleteJobDialog
  jobId={job.id}
  onDelete={handelDeleteJob}
  isPending={isPending}
/>

                      </div>
                    </div>
                  </div>

                ))}

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />

                {editingJob && (
                  <EditJobForm
                    job={editingJob}
                    onSave={(newjob) => {
                      setCompanyJobs((prev) =>
                        prev.map((j) => (j?.id === newjob?.id ? newjob : j))
                      );
                      setEditingJob(null);
                    }}
                    onCancel={() => setEditingJob(null)}
                  />
                )}
              </Tabs.Content>

              {/* Reviews Tab */}
              <Tabs.Content value="reviews">
                <Dialog.Root open={open} onOpenChange={setOpen}>
                  <Dialog.Trigger>
                    <button className="mb-3 bg-blue-600 text-white px-3 py-1 gap-4 rounded text-sm h-[6vh] w-[32vh] flex justify-center items-center">
                      <FiPlus size={25}/>
                     Add Company Review
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Add a Review</Dialog.Title>
                    <Dialog.Description>
                      Share your experience about this company.
                    </Dialog.Description>

                    <textarea
                      className="w-full border rounded-md mt-4 p-2"
                      rows={4}
                      placeholder="Write your review here..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                    />

                    <div className="flex justify-end mt-4 gap-3">
                      <Dialog.Close>
                        <button className="px-4 py-2 bg-gray-200 rounded-md">
                          Cancel
                        </button>
                      </Dialog.Close>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        onClick={handelReview}
                      >
                        Submit
                      </button>
                    </div>
                  </Dialog.Content>
                </Dialog.Root>

                {company.review.length === 0 ? (
                  <div>No reviews yet.</div>
                ) : (
                  company.review.map((rev, index) => (
                    <div
                      key={index}
                      className="rounded-2xl shadow-md hover:shadow-lg transition duration-300  p-3 mb-3 bg-white"
                    >
                      <p className="text-gray-800">{rev.content}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        By: {rev.user?.email}
                      </p>
                    </div>
                  ))
                )}
              </Tabs.Content>
            </Box>
          </Tabs.Root>

          {/* Owner Info */}
          <div className="bg-white mt-6 p-4 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                {owner.email[0].toUpperCase()}
              </div>
              <h3 className="mt-2 text-lg font-semibold">Owner</h3>
              <p className="text-sm text-blue-600 uppercase">{owner.role}</p>
            </div>
            <div className="mt-4 text-sm space-y-2">
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-gray-900">{owner.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Owner ID</p>
                <p className="text-gray-900 font-mono">{owner.id}</p>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm">
                <Link href={`mailto:${owner.email}`}>Contact Owner</Link>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Pagination Component
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {"<"}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded ${currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}
