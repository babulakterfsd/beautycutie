'use client';

import useAppContext from '@/hooks/useAppContext';
import { useRouter } from 'next/navigation';
import { FaPrint } from 'react-icons/fa';
import NewQueries from './NewQueries';
import { Button, CustomSelect, FileUpload } from './blog-post';
import BlogForm from './blog-post/BlogForm';

const BlogPost = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const options2 = ['Oliva', 'Phoneix', 'Lana', 'Luna'];
  const { formData, setFormData } = useAppContext();
  const router = useRouter();

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/api/postblog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        category: 'Design',
        image: 'https://i.ibb.co/HnCw5M3/blog4.png',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          alert('Blog posted successfully');
          console.log(data);
          setFormData({
            title: '',
            content: '',
            category: '',
            image: '',
          });
          router.push('/blog');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="dashboard-container flex flex-col gap-y-8 md:flex-row   gap-x-[10px] h-screen md:ml-3 w-full relative">
      <div className="dashboard-content w-full order-2 lg:order-1 md:p-5  min-h-screen overflow-y-scroll overflow-x-scroll md:overflow-x-hidden scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:w-4/6">
        <div className=" w-full md:px-6 px-3 shadow-xl rounded-b-2xl lg:pb-0  lg:-mt-4">
          <h1 className="mt-3 md:mt-0 text-cyan text-[14px] leading-[18px] md:text-[18px] md:leading-[28px] font-semibold mb-2 lg:mb-4 font-inter">
            Blog post
          </h1>
          <form onSubmit={handlePostSubmit}>
            <BlogForm />
            <CustomSelect
              options={options}
              title={'Add meta tag*'}
              bottomTitle="This is a hint text to help user."
            />

            <CustomSelect
              options={options2}
              title={'Add meta descriptions*'}
              bottomTitle="Maximum 10 words."
            />

            <FileUpload
              title="Click to upload or drag and drop"
              acceptOnly="SVG, PNG, JPG or GIF (max. 800x400px)"
            />

            <div className="blog-submit-btn md:flex gap-y-3 md:gap-y-0 lg:mt-12 flex-col md:flex-row justify-between md:gap-x-2 md:-ml-1 lg:ml-0">
              <Button
                textStyle=" text-[#67748E]"
                icon={<FaPrint className=" text-[#67748E]" size={13} />}
                style=" border border-slate-300 mt-2 md:mt-0"
              >
                Save as draft
              </Button>
              <Button
                textStyle=" text-white"
                style="my-3 md:my-0 bg-[#FFAAA5] "
              >
                Publish
              </Button>
            </div>
          </form>
          <h1 className="padding-bottom md:pb-16"> </h1>
        </div>
      </div>

      <div className="dashboard-content order-1 lg:order-2 w-full md:w-3/5 lg:w-2/6 ">
        <NewQueries />
      </div>
    </div>
  );
};

export default BlogPost;
