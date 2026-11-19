import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { NGOTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetail } from '@/components/sections/BlogDetail';

// One common detail page for every post: all blog links point here and it shows the detailPostId post.
export const metadata: Metadata = { ...(rawData as NGOTemplateData).common.blogDetailBreadcrumb?.seo };

export default function BlogDetailPage() {
  const templateData: NGOTemplateData = rawData;
  const sectionData = templateData?.categories?.NGO?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const blogData = sectionData.Blogs?.variants?.NGOBlogs1;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={blogData} postId={blogData?.detailPostId} />
    </main>
  );
}
