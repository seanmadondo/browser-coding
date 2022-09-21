/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { MemoizedFileExpand } from "../components/FileTreeExpand";
import FolderIcon from "@mui/icons-material/Folder";
import { IExpandableDropdown } from "../types";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DownloadIcon from "@mui/icons-material/Download";
import ArticleIcon from "@mui/icons-material/Article";

const switchExpandableIcon = (label: string) => {
  switch (label) {
    case "Documents":
      return <FolderIcon />;
    case "Desktop":
      return <DesktopMacIcon />;
    case "Downloads":
      return <DownloadIcon />;
    default:
      return <ArticleIcon />;
  }
};

interface DocumentProps {
  label: string;
}

const Document = ({ label }: DocumentProps) => {
  return (
    <div css={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <ArticleIcon />
      {label}
    </div>
  );
};

const mapChildren = (childrenData: IExpandableDropdown[]): JSX.Element => {
  return (
    <section>
      {childrenData.map((child: IExpandableDropdown) => {
        return (
          <section key={child.key}>
            {child.children ? (
              <MemoizedFileExpand
                key={child.key}
                icon={
                  child.children ? (
                    <FolderIcon />
                  ) : (
                    switchExpandableIcon(child.label)
                  )
                }
                label={child.label}
                title={child.title}
                children={child.children && mapChildren(child.children)}
              />
            ) : (
              <Document label={child.label} />
            )}
          </section>
        );
      })}
    </section>
  );
};

export const Tree = () => {
  const [data, setData] = useState<IExpandableDropdown[]>([]);

  useEffect(() => {
    const URL = " http://localhost:3004/treeData";

    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <section
      css={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
        flexDirection: "column",
      }}
    >
      {data.map((expandable: IExpandableDropdown) => {
        return (
          <MemoizedFileExpand
            key={expandable.key}
            icon={switchExpandableIcon(expandable.label)}
            label={expandable.label}
            title={expandable.title}
            children={expandable.children && mapChildren(expandable.children)}
          />
        );
      })}
    </section>
  );
};
