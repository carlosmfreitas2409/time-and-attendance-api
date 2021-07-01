import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CloseAppointmentUseCase } from './CloseAppointmentUseCase';

class CloseAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { collaborator_matriculation } = request.params;

    const closeAppointment = container.resolve(CloseAppointmentUseCase);

    await closeAppointment.execute({
      collaborator_matriculation: Number(collaborator_matriculation),
    });

    return response.status(204).send();
  }
}

export { CloseAppointmentController };
