import React from "react";
import { Link } from "react-router-dom";

const TutorialCard = ({ tutorial }) => {
  const {
    id,
    title,
    description,
    image,
    category,
    duration,
    level,
    energySaving,
    author,
    date,
    tags,
  } = tutorial;

  return (
    <div className="card flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-600">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              {category}
            </span>
          </p>
          <Link to={`/tutorials/${id}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </Link>
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{author}</span>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString("pt-BR")}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{duration} de leitura</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-1 text-sm text-gray-600">
                Economia de {energySaving}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
              {level}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
