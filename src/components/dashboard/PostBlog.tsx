'use client';

import { FaPrint } from 'react-icons/fa';
import NewQueries from './NewQueries';
import { Button, CustomSelect, FileUpload } from './blog-post';
import BlogForm from './blog-post/BlogForm';

const BlogPost = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const options2 = ['Oliva', 'Phoneix', 'Lana', 'Luna'];
  return (
    <div className="   md:flex gap-x-[10px] h-screen md:mt-3 md:ml-3 w-full relative">
      <div className=" w-full  md:p-5 rounded-md h-screen overflow-y-scroll overflow-x-scroll md:overflow-x-hidden scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:w-4/6   ">
        <div className=" w-full md:px-6 px-3  shadow-xl">
          <h1 className=" text-[#67748E] font-semibold mb-2">Blog post</h1>
          <BlogForm />
          <CustomSelect
            options={options}
            title={'Add meta tag*'}
            bottomTitle="This is a hint text to help user."
          />

          <FileUpload
            title="Click to upload or drag and drop"
            acceptOnly="SVG, PNG, JPG or GIF (max. 800x400px)"
          />
          <CustomSelect
            options={options2}
            title={'Add meta descriptions*'}
            bottomTitle="Maximum 10 words."
          />
          <div className="  flex justify-between gap-x-2">
            <Button
              textStyle=" text-[#67748E]"
              icon={<FaPrint className=" text-[#67748E]" size={13} />}
              style=" border border-slate-300"
            >
              Save as draft
            </Button>
            <Button textStyle=" text-white" style=" bg-[#FFAAA5]">
              Publish
            </Button>
          </div>
          <h1 className=" md:pb-16"> </h1>
        </div>
      </div>

      <div className="  w-full  md:w-2/6 ">
        <NewQueries />
      </div>
    </div>
  );
};

export default BlogPost;
