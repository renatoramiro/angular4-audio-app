import { TestBed, inject } from '@angular/core/testing';

import { AudioService } from './audio.service.ts';

describe('AudioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioService]
    });
  });

  it('should be created', inject([AudioService], (service: AudioService) => {
    expect(service).toBeTruthy();
  }));
});
