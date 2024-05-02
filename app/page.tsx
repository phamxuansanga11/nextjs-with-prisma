"use server";

import Category from "@/src/components/Customs/Category";
import CardItem from "@/src/components/Customs/Ui/CardItem";
import IconSearch from "@/src/components/Customs/Ui/Icons/IconSearch";
import PageContainer from "@/src/components/PageContainer";
import { Card, Divider, Input, Pagination, Tag, Typography } from "antd";

export default async function Home() {
  return (
    <PageContainer className="min-h-screen p-4 bg-background-light dark:bg-primary">
      <div className="mb-4">
        <Category />
      </div>
      <Input
        size="large"
        placeholder="Search every thing..."
        prefix={<IconSearch />}
        className="max-w-[400px] !text-[14px] font-medium"
      />
      <div className="py-6 grid grid-cols-4 gap-6">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <CardItem key={index} />
          ))}
      </div>
      <div className="flex justify-end">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </PageContainer>
  );
}
