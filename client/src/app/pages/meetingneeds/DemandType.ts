import { DemandType } from '../../../shared/DataModels';

export function demandTypeName(demandType: DemandType): string {
  switch (demandType) {
    case DemandType.Specialist:
      return 'Fachkraft';
    case DemandType.Assistant:
      return 'Ergänzungskraft';
    case DemandType.Manager:
      return 'Leitung';
    case DemandType.Support:
      return 'Unterstützungskraft';
  }
}
