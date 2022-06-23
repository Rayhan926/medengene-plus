import Link from "next/link";
import React from "react";

const FooterLinksRenderer = ({ section_title, links, ...props }) => {
  return (
    <div {...props}>
      <h6 className="text-lx mb-5 text-white font-semibold">{section_title}</h6>
      <ul className="text-base space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url}>
              <a className="inline-block hover:underline text-white">
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksRenderer;
