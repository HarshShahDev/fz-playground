'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Button from '#/ui/Buttons';
import { ExternalLink } from '#/ui/external-link';
import { Input } from '#/ui/input';
import { TextArea } from '#/ui/textArea';

export default function Page() {
  const [formId, setFormId] = useState('jXGVknaV');
  return (
    <>
      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-bold">Customized thank you page content</h1>
        <p>
          To try Customized thank you page content featuer follow step given in{' '}
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/features/thank-you-page`}
            target={'_blank'}
          >
            documentation <BsBoxArrowUpRight className="inline" />
          </Link>{' '}
          and enter that form-id bellow.
        </p>
        <div className="mb-4 mt-4 w-[30%] justify-center">
          <label className="mb-2 block text-sm font-bold " htmlFor="form-id">
            Form ID
          </label>
          <Input
            id="form-id"
            type="text"
            name="formId"
            placeholder="eg. nuKZPc-I"
            required
            onChange={(e) => {
              setFormId(e.target.value);
            }}
          />
        </div>
        <form
          action={`https://dev-app.formzillion.com/f/${formId}`}
          method="post"
        >
          <div className=" mx-auto mb-4 justify-center space-y-5 rounded bg-gray-400/10 px-8 pb-8 pt-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold ">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold ">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold "
              >
                Message
              </label>
              <TextArea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></TextArea>
            </div>
            <Button type="submit">Send</Button>
          </div>
        </form>
        <div className="flex gap-2">
          <ExternalLink
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/features/thank-you-page`}
          >
            Docs
          </ExternalLink>

          <ExternalLink href="#">Code</ExternalLink>
        </div>
      </div>
    </>
  );
}
