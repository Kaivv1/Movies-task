import { ChevronRight, ChevronsRight } from "lucide-react";
import "./_pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <button>1</button>
      <button>2</button>
      <button>
        <ChevronRight size="1rem" />
      </button>
      <button>
        <ChevronsRight size="1rem" />
      </button>
    </div>
  );
};

export default Pagination;
