import { type WriteStatements } from '../types';
import {
  writeDecimalJsLike,
  writeDecimalJsLikeList,
  writeInputJsonValue,
  writeIsValidDecimalInput,
  writeJsonValue,
  writeNullableJsonValue,
  writeTransformJsonNull,
} from '.';

/////////////////////////////////////////////////
// FUNCTION
/////////////////////////////////////////////////

export const writeSingleFileHelperStatements: WriteStatements = (
  dmmf,
  fileWriter,
) => {
  fileWriter.writeHeading('HELPER FUNCTIONS', 'FAT');

  // JSON
  // ------------------------------------------------------------

  if (dmmf.schema.hasJsonTypes) {
    fileWriter.writeHeading(`JSON`, 'SLIM');

    writeTransformJsonNull({ fileWriter, dmmf });
    writeJsonValue({ fileWriter, dmmf });
    writeNullableJsonValue({ fileWriter, dmmf });
    writeInputJsonValue({ fileWriter, dmmf });

    fileWriter.writer.newLine();
  }

  // DECIMAL
  // ------------------------------------------------------------

  if (dmmf.schema.hasDecimalTypes) {
    fileWriter.writeHeading(`DECIMAL`, 'SLIM');

    writeDecimalJsLike({ fileWriter, dmmf });
    writeDecimalJsLikeList({ fileWriter, dmmf });
    writeIsValidDecimalInput({ fileWriter, dmmf });

    fileWriter.writer.newLine();
  }
};
