/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UniversalActivateLink = ({ href, children, as = undefined }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return (
    <Link href={href} as={as}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default UniversalActivateLink;
