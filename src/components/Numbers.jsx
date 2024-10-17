import React, { useState, useMemo } from "react";

function Numbers({ numbers }) {
  const [filter, setFilter] = useState("");
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  const filteredNumbers = useMemo(() => {
    return numbers.filter(
      (number) => number % 2 === 0 && number.toString().includes(filter)
    );
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        placeholder=" Numbers"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4"
      />
      <ul>
        {filteredNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Numbers;
