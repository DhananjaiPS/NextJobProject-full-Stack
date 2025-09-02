"use client";
import { useContext, useState } from "react";
import { UserContext } from "../(group)/layout";
import { logout } from "@/actions/logout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  // Safely extract email and company_id
  const email = user?.email ?? null;
  const company_id = user?.company?.id ?? null;

  async function handelLogout() {
    const res = await logout();
    if (res.success) {
      setUser(null); // ✅ don't set to "" (string), keep type consistency
      toast.success(res.message);
      router.push("/login");
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden text-white text-3xl rounded"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-500 text-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>

        <ul className="p-4 flex flex-col gap-4">
          <li>
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/jobs?search=engineer"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              href="/saved"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Saved Jobs
            </a>
          </li>

          {!email && (
            <li>
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Login
              </a>
            </li>
          )}

          {email && (
            <>
              {!company_id && (
                <li>
                  <a
                    href="/company"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-600"
                  >
                    Add company
                  </a>
                </li>
              )}

              {company_id && (
                <>
                  <li>
                    <Link href={`/company/${company_id}`}>
                      <p
                        className="hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Company Details
                      </p>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/addJobs"
                      onClick={() => setIsOpen(false)}
                      className="hover:text-blue-600"
                    >
                      Add Jobs
                    </a>
                  </li>
                </>
              )}

              <li>
                <a
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-600 cursor-pointer"
                  onClick={async () => {
                    await handelLogout();
                    setIsOpen(false);
                  }}
                >
                  Log out
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
