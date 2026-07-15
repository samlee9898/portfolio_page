import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "@base-ui/react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-2">
        <Image
          src="/images/Sam_Lee.jpeg"
          alt="Photo of me"
          width={200}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto rounded-2xl"
        />
        <div className="flex flex-col gap-2">
          <div>
            <p>
              Hello, my name is Sam Lee! I'm an aspiring full-stack developer
              currently seeking an entry-level software developer position. This
              page is under construction and will eventually showcase my
              projects and blog posts. Please check back soon!
            </p>
          </div>
          <div className="flex gap-1">
            <div>
              <a
                href="https://github.com/samlee9898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/samuel-lee-b4a9a61ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/samlee9898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <Link
              href="/Sam_Lee_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
            >
              <FaFileDownload className="mr-1" />
              Full Resume
            </Link>
          </div>
          <Separator className="bg-gray-400" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Tech Stack</p>
            <span>Languages: Javascript/Typescript, Java, Python, SQL</span>
            <span>
              Technologies/Tech Stack: NextJS, TailwindCSS, MySQL, Docker
            </span>
            <span>Developer Tools: Git, Slack, Jira, ChatGPT, Claude</span>
          </div>
          <Separator className="bg-gray-400" />
          <p className="text-lg font-semibold">Work Experience</p>
          <div>
            <p className="m-0 flex items-center justify-between leading-tight">
              <span className="font-semibold">
                Machine Vision Inspection Technician
              </span>
              <span>May 2026 — Present</span>
            </p>
            <p className="m-0 flex items-center justify-between leading-tight italic">
              <span>LSP USA LLC — Ultium Cells Battery Plant</span>
              <span>Spring Hill, TN</span>
            </p>
            <ul className="list-disc list-outside pl-5">
              <li>
                Provide technical support for machine vision inspection systems
                used in electrode Notch and Dry manufacturing processes,
                ensuring continuous operation and minimizing equipment downtime.
              </li>
              <li>
                Diagnose and resolve hardware and software issues through
                systematic troubleshooting and root cause analysis to restore
                equipment performance.
              </li>
              <li>
                Collaborate with production, maintenance, and engineering teams
                to identify recurring issues, implement corrective actions, and
                improve system reliability.
              </li>
            </ul>
          </div>
          <div>
            <p className="m-0 flex items-center justify-between leading-tight">
              <span className="font-semibold">Military Driver</span>
              <span>Nov 2021 — Apr 2023</span>
            </p>
            <p className="m-0 flex items-center justify-between leading-tight italic">
              <span className="block leading-tight">South Korean Army</span>
              <span>Seoul, South Korea</span>
            </p>
            <ul className="list-disc list-outside pl-5">
              <li>
                Transported personnel and materials, operating sedans, SUVs, and
                small cargo vehicles.
              </li>
              <li>
                Collaborated with senior officers to coordinate personnel leave
                schedules, ensuring adequate staffing and uninterrupted daily
                operations.
              </li>
              <li>
                Served as a squad leader for five months, mediating conflicts
                between fellow soldiers, coordinating logistics, and overseeing
                daily operations in a time-sensitive environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
