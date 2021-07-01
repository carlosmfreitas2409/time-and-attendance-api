import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RecordAppointmentUseCase } from './RecordAppointmentUseCase';

class RecordAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { collaborator_matriculation } = request.params;

    const recordAppointment = container.resolve(RecordAppointmentUseCase);

    await recordAppointment.execute({
      collaborator_matriculation: Number(collaborator_matriculation),
    });

    return response.status(201).send();
  }
}

export { RecordAppointmentController };
