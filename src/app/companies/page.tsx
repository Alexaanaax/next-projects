import React from 'react';
import Toolbar from '../components/toolbar';
import Header from '../components/header';
import AddCompanyButton from '../components/add-company-button';
import SearchInput from '../components/search-input';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/status-label';

export interface PageProps {
  params: { id: string };
}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'09.20.2024'}
        />
      </CompanyTable>
    </>
  );
}
