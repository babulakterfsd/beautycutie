import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../server/lib/connectDB';
import BlogPosts from '../../../../server/model/Blogs.model';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();
    const allBlogs = await BlogPosts.find({});

    return NextResponse.json({
      status: 'success',
      statusCode: 200,
      data: allBlogs,
      message: 'All blogs are fetched successfully.',
    });
  } catch (error) {
    return NextResponse.json({
      status: 'fail',
      statusCode: 503,
      message: "Something is wrong, blogs couldn't be fetched.",
    });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();

    const requestBody = await req.json();

    let savedBlog = await BlogPosts.create({ ...requestBody });

    if (!savedBlog) {
      return NextResponse.json({
        status: 'fail',
        statusCode: 502,
        message: 'Something is wrong while saving the blog.',
      });
    }

    return NextResponse.json({
      status: 'success',
      statusCode: 200,
      data: savedBlog,
      message: 'Blog posted successfully.',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 'fail',
      statusCode: 503,
      message: error?.message,
    });
  }
}
