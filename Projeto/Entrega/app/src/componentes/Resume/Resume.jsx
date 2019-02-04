import React, { Fragment } from "react";
import { Utils as Html, Title } from "../../componentes";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

const Resume = props => {
  const { url: fonte_url, title: fonte_title } = props.fonte || {};

  const { titlevariant, bodyvariant } = props;

  return (
    <Fragment>
      <Typography
        className={"resumeTitle"}
        variant={titlevariant ? titlevariant : "display1"}
        gutterBottom
      >
        {props.link ? (
          <a href={props.link} target="_blank" rel="external">
            {props.title}
          </a>
        ) : props.to ? (
          <Link to={props.to}>{props.title}</Link>
        ) : (
          props.title
        )}
      </Typography>
      <Typography variant={bodyvariant ? bodyvariant : "body1"} gutterBottom>
        <Html html={props.content} /> {props.children}
      </Typography>
      <Fragment>
        {props.fonte ? (
          <Typography variant={"caption"}>
            Fonte:{" "}
            <a href={fonte_url} target="_blank" rel="external">
              {fonte_title}
            </a>
          </Typography>
        ) : (
          false
        )}
      </Fragment>
    </Fragment>
  );
};

export default Resume;
