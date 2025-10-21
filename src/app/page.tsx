"use client";

import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className="min-h-screen px-6 sm:px-12 lg:px-24 py-20 max-w-4xl mx-auto">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight">
          Oswin Hakim | Data & AI Professional
        </h2>
        <p className="text-lg text-blue-500 dark:text-blue-400">
          Microsoft Azure & Databricks Certified
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          I approach work with humility and extreme ownership. Backed by multiple
          industry-recognised certifications, I bring strong technical execution
          along with a focus on collaboration, trust, and delivering business value.
        </p>
      </motion.section>

      {/* Journey */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-semibold mb-8">My Journey</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* Present */}
            <motion.div 
              className="relative flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2 text-blue-500">Present</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Taking a break — learning, reflecting, and exploring new opportunities in
                    Indonesia. Let&apos;s have a chat!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Staying or Returning */}
            <motion.div 
              className="relative flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2 text-black">Staying or Returning?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Time flies — without realizing it, I had already worked for two years at
                    One51. I truly cherish the memories and relationships I built with my
                    colleagues and clients there. Then came an opportunity to join a big
                    company, which I decided to pursue. But not long after joining, I had to
                    submit another resignation due to personal reasons. Looking back, I see it
                    as a calling to return home — to Indonesia.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* First Career Breakthrough */}
            <motion.div 
              className="relative flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2 text-black">First Career Breakthrough</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Just six months before graduation, I panicked because I hadn&apos;t done any
                    internships. The job market for IT graduates at the time wasn&apos;t great
                    either. I remember sleeping only four hours a day, grinding in my bedroom
                    to upskill myself. Fortunately, my hard work paid off — I managed to secure
                    my first tech internship at One51. Even better, that internship was
                    converted into a full-time position after graduation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Leaving Indonesia for University */}
            <motion.div 
              className="relative flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2 text-black">Leaving Indonesia for University</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    After the Covid lockdowns in Australia ended, I immediately flew there to
                    pursue my IT degree in Data Analytics and Business Information Systems
                    Management.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Dropping Out of High School */}
            <motion.div 
              className="relative flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
                  <h4 className="text-xl font-semibold mb-2 text-black">Dropping Out of High School</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    I decided to drop out of high school. Why? Because I had been coding since
                    I was 12 and already knew that IT was the career I wanted to pursue. So, I
                    enrolled in a program designed to prepare me for studying IT in Australia —
                    with the bonus of graduating two years earlier than usual.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold mb-8">Featured Posts</h3>
        <div className="space-y-4">
          {/* Post 1 */}
          <motion.a
            href="https://www.linkedin.com/posts/oswinhakim_three-things-i-learn-from-life-1-comfort-activity-7353334664964567040-TTX_"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                3 Things I Learn from Life
              </h4>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                LinkedIn
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </motion.a>

          {/* Post 2 */}
          <motion.a
            href="https://www.linkedin.com/posts/oswinhakim_hi-all-i-want-to-share-a-bit-from-my-little-activity-7351377600319016960-Vcvh"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                3 Lessons Learned from Consulting
              </h4>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                LinkedIn
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold mb-4">Connect</h3>
        <div className="flex items-center space-x-6">
          <a
            href="https://linkedin.com/in/oswinhakim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-md"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <a
            href="mailto:oh.oswinhakim@gmail.com"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </motion.section>
    </main>
  );
}
