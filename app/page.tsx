import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hello there! I am Joel!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a software engineer and data analyst with a passion for building
          scalable web applications and analyzing data to drive business
          insights. 
        </p>
        
        <p>
          I love data analysis and visualization. I
          have experience in using tools like{" "}
          <a
            href="https://pandas.pydata.org/"
            target="_blank"
            className="underline"
          >
            pandas
          </a>
          ,{" "}
          <a
            href="https://matplotlib.org/"
            target="_blank"
            className="underline"
          >
            Matplotlib
          </a>
          , and{" "}
          <a
            href="https://plotly.com/"
            target="_blank"
            className="underline"
          >
            Plotly
          </a>{" "}
          to analyse and visualise data. I enjoy turning complex data sets into
          actionable insights that can help businesses make informed decisions.      
        </p>

        <p>
         I have experience in full-stack web development. I love working with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="underline"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            className="underline"
          >
            React
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="underline"
          >
            Tailwind CSS
          </a>
          . I enjoy creating user-friendly interfaces and optimizing web
          applications for performance and accessibility.
        </p>
        <p>
          In my free time, I enjoy doing my own projects projects, learning
          new technologies, and sharing my knowledge with the community. You can
          find some of my work analysing women's football on{" "}
          <a
            href="https://x.com/woso_analytics"
            target="_blank"
            className="underline"
          >
            X, formerly Twitter 
          </a>          
        </p>
        
      </div>
    </section>
  );
}
