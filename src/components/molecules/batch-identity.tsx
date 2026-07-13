import { BatchId } from "@/components/atoms/batch-id";
import { SpeciesScientificName } from "@/components/atoms/species-scientific-name";

export interface BatchIdentityProps {
  batchId: string;
  scientificName: string;
  variety: string;
  /** Show the batch identifier line (default true). */
  showId?: boolean;
}

/** Batch headline: identifier, scientific species name, and variety. */
export function BatchIdentity({ batchId, scientificName, variety, showId = true }: BatchIdentityProps) {
  return (
    <div className="batch-identity">
      {showId && <BatchId value={batchId} />}
      <SpeciesScientificName name={scientificName} />
      <span className="batch-variety">{variety}</span>
    </div>
  );
}
