export interface SpeciesScientificNameProps {
  name: string;
}

/** Scientific (Latin) species name, italicized per biological naming convention. */
export function SpeciesScientificName({ name }: SpeciesScientificNameProps) {
  return <i className="species-sci">{name}</i>;
}
