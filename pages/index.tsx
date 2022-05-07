import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Page, { getServerSideProps as baseGetServerSideProps } from './[...slug]';

export default Page;

export async function getServerSideProps(
  context: GetServerSidePropsContext
){
  return baseGetServerSideProps(context);
}
