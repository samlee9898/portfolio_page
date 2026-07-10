import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
          <p>Hello, my name is Sam Lee!</p>
          <p>This page is for showcasing my projects and blog posts.</p>
          <p>
            I aspire to be a full-stack developer and am currently seeking an
            entry-level developer position.
          </p>
          <p>This website is under construction. Check back soon!</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
