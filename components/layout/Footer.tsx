import { siteConfig } from "../../lib/site";

export default function Footer() {
  const { companyName, email, phone, address } = siteConfig;

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-gray-600 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-gray-900">{companyName}</p>
            <p>{address}</p>
          </div>

          <div className="flex flex-col gap-1 sm:items-end">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>

        <p className="border-t border-gray-200 pt-4 text-center text-xs sm:text-left">
          © 2026 {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
