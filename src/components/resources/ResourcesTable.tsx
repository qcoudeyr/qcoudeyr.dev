'use client';

import { Resource } from "@/app/resources/resourcesList";
import React, { Key } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SortDescriptor
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";


interface ResourcesTableProps {
  resources: Resource[];
}

export function ResourcesTable({ resources }: ResourcesTableProps) {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "name",
    direction: "ascending"
  });

const sortedItems = React.useMemo(() => {
  return [...resources].sort((a, b) => {
    const column = sortDescriptor.column as keyof Resource;
    const first = a[column];
    const second = b[column];

    // Handle category separately since it's an array
    if (column === 'category') {
      const firstCat = (first as string[]).join('');
      const secondCat = (second as string[]).join('');
      return sortDescriptor.direction === "descending"
        ? secondCat.localeCompare(firstCat)
        : firstCat.localeCompare(secondCat);
    }

    // Handle other values with null coalescing
    const firstValue = first ?? '';
    const secondValue = second ?? '';

    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
      return sortDescriptor.direction === "descending"
        ? secondValue.localeCompare(firstValue)
        : firstValue.localeCompare(secondValue);
    }

    // Handle numbers
    const numericFirst = Number(firstValue) || 0;
    const numericSecond = Number(secondValue) || 0;
    const cmp = numericFirst - numericSecond;

    return sortDescriptor.direction === "descending" ? -cmp : cmp;
  });
}, [resources, sortDescriptor]);

  const renderCell = React.useCallback((item: Resource, columnKey: keyof Resource) => {
    const value = item[columnKey];

    switch (columnKey) {
      case "category":
        return (
          <div className="flex gap-2 flex-wrap justify-center">
            {item.category.map((cat) => (
              <Chip key={cat} size="sm">{cat}</Chip>
            ))}
          </div>
        );
      case "rating":
        return <span className="text-lg">{("⭐").repeat(item.rating)}</span>;
      case "github":
      case "website":
      case "url":
        return value ? (
          <a href={value as string}
             target="_blank"
             rel="noopener noreferrer"
             className="text-primary hover:underline text-sm">
            {value as string}
          </a>
        ) : "-";
      case "name":
        return <span className="font-medium text-base">{value}</span>;
      case "description":
        return <span className="text-sm">{value}</span>;
      default:
        return <span className="text-sm">{value}</span>;
    }
  }, []);

  return (
    <Table
      aria-label="Resources table"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      classNames={{
        table: "min-h-[400px]",
        wrapper: "max-h-[600px]",
        base: "max-w-full overflow-x-auto",
        th: "border-b border-r border-divider text-center",
        td: "border-b border-r border-divider text-center",
        tr: "border-b border-divider"
      }}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting align="center">Name</TableColumn>
        <TableColumn key="description" align="center">Description</TableColumn>
        <TableColumn key="creator" align="center">Creator</TableColumn>
        <TableColumn key="category" align="center">Categories</TableColumn>
        <TableColumn key="github" align="center">GitHub</TableColumn>
        <TableColumn key="website" align="center">Website</TableColumn>
        <TableColumn key="rating" allowsSorting align="center">Rating</TableColumn>
      </TableHeader>
      <TableBody items={sortedItems}>
      {(item: Resource) => (
        <TableRow key={item.name}>
        {(columnKey: Key) => (
          <TableCell>
          {renderCell(item, columnKey.toString() as keyof Resource)}
          </TableCell>
        )}
        </TableRow>
      )}
      </TableBody>
    </Table>
  );
}
