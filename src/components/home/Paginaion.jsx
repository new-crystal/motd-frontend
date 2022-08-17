import React from "react";
import ReactUltimatePagination from "react-ultimate-pagination";

function Page(props) {
  return (
    <button
      style={props.isActive ? { fontWeight: "bold" } : null}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </button>
  );
}

function Ellipsis(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      ...
    </button>
  );
}

function FirstPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      First
    </button>
  );
}

function PreviousPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Previous
    </button>
  );
}

function NextPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Next
    </button>
  );
}

function LastPageLink(props) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      Last
    </button>
  );
}

function Wrapper(props) {
  return <div className="pagination">{props.children}</div>;
}

const itemTypeToComponent = {
  PAGE: Page,
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink,
};

const UltimatePagination = ReactUltimatePagination.createUltimatePagination({
  itemTypeToComponent: itemTypeToComponent,
  WrapperComponent: Wrapper,
});
