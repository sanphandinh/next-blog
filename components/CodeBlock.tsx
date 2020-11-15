import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import classNames from '../helpers/classNames';

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={children}
      language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            'text-left overflow-auto mx-0 my-4 p-2',
            className
          )}
          style={style}>
          {tokens.map((line, i) => {
            const { className, ...rest } = getLineProps({ line, key: i });
            return (
              <div
                key={i}
                className={classNames('table-row', className)}
                {...rest}>
                <span className="table-cell text-right pr-4 select-none opacity-50">
                  {i + 1}|
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
