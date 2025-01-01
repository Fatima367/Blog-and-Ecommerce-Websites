import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Blog slug is required" },
      { status: 400 }
    );
  }

  const query = `*[_type == "comment" && blogSlug == $slug] | order(date asc)`;
  const comments = await client.fetch(query, { slug });

  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.username || !body.text || !body.blogSlug) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const newComment = {
    _type: "comment",
    username: body.username,
    text: body.text,
    blogSlug: body.blogSlug,
    date: new Date().toISOString(),
  };

  try {
    const createdComment = await client.create(newComment);
    return NextResponse.json(createdComment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
