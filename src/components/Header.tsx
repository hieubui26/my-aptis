// components/Header.tsx
"use client";

import Button from "./Button";
import Dropdown from "./Dropdown";
import CustomLink from "./CustomLink";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 w-full">
      <nav className="container mx-auto max-w-full flex justify-between items-center">
        <div className="flex-1"></div>

        <ul className="flex justify-center items-center space-x-10 list-none h-19">
          <li>
            <CustomLink href="/" className="text-white hover:text-red-500">
              Trang chủ
            </CustomLink>
          </li>

          <li>
            <Dropdown label="Aptis Exam Library">
              <CustomLink
                href="/aptis"
                className="block px-4 py-2 hover:bg-red-500 text-black hover:text-white"
              >
                Aptis General
              </CustomLink>
              <CustomLink
                href="/aptis-teachers"
                className="block px-4 py-2 hover:bg-red-500 text-black hover:text-white"
              >
                Aptis for Teachers
              </CustomLink>
              <CustomLink
                href="/aptis-advanced"
                className="block px-4 py-2 hover:bg-red-500 text-black hover:text-white"
              >
                Aptis Advanced
              </CustomLink>
              <CustomLink
                href="/aptis-teens"
                className="block px-4 py-2 hover:bg-red-500 text-black hover:text-white"
              >
                Aptis for Teens
              </CustomLink>
            </Dropdown>
          </li>

          <li>
            <CustomLink
              href="/contact"
              className="text-white hover:text-red-500"
            >
              Contact
            </CustomLink>
          </li>
        </ul>

        <ul className="flex-1 flex justify-end items-center space-x-10 list-none">
          <li>
            <CustomLink
              href="/sign-in"
              className="text-white hover:text-red-500"
            >
              Sign In
            </CustomLink>
          </li>
          <li>
            <Button>
              <CustomLink
                href="/sign-up"
                className="text-white hover:text-red-500"
              >
                Sign Up
              </CustomLink>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
